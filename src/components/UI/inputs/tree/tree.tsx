import React, { useState, useRef, useEffect } from 'react';
import Chevron from '@/assets/icons/Chevron';
import Checkbox from '@/components/UI/checkboxes/base/base';
import './tree.scss';

interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  disabled?: boolean;
}

interface TreeSelectProps {
  data: TreeNode[];
  onChange: (selected: string[]) => void;
  label: string;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  big?: boolean;
  dark?: boolean;
  full?: boolean;
  checkboxTheme?: 'primary' | 'secondary' | 'danger';
  checkboxPosition?: 'right' | 'left';
}

const TreeSelect: React.FC<TreeSelectProps> = ({
  data,
  onChange,
  label,
  placeholder,
  disabled,
  required,
  error,
  big,
  dark,
  full,
  checkboxTheme = 'primary',
  checkboxPosition = 'right'
}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [filter, setFilter] = useState('');
  const [expandedNodes, setExpandedNodes] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const treeRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  const getAllDescendants = (node: TreeNode): string[] => {
    let descendants: string[] = [];
    if (node.children) {
      node.children.forEach((child) => {
        descendants.push(child.id);
        descendants = descendants.concat(getAllDescendants(child));
      });
    }
    return descendants;
  };

  const handleSelect = (id: string, nodeDisabled?: boolean) => {
    if (nodeDisabled || disabled) return;

    const node = findNodeById(data, id);
    const descendants = node ? getAllDescendants(node) : [];
    const updatedSelected = selected.includes(id)
      ? selected.filter((item) => ![id, ...descendants].includes(item))
      : [...selected, id, ...descendants];

    setSelected(updatedSelected);
    onChange(updatedSelected);
  };

  const findNodeById = (nodes: TreeNode[], id: string): TreeNode | undefined => {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const found = findNodeById(node.children, id);
        if (found) return found;
      }
    }
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      treeRef.current &&
      !treeRef.current.contains(event.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  const toggleExpand = (id: string) => {
    if (disabled) return;
    setExpandedNodes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderTree = (nodes: TreeNode[]) => {
    return nodes.map((node) => {
      const isExpanded = expandedNodes.includes(node.id);
      const isChecked = selected.includes(node.id);
      const hasChildren = node.children && node.children.length > 0;
      const nodeDisabled = node.disabled || disabled;
      const matchFilter = filter === '' || node.label.toLowerCase().includes(filter.toLowerCase());

      return matchFilter ? (
        <div key={node.id} className={`tree-node ${nodeDisabled ? 'disabled' : ''}`}>
          <div className="node-label">
            {hasChildren && (
              <span
                className={`expand-icon ${isExpanded ? 'expanded' : ''}`}
                onClick={() => toggleExpand(node.id)}
              >
                {isExpanded ? '-' : '+'}
              </span>
            )}
            <Checkbox
              position={checkboxPosition}
              disabled={nodeDisabled}
              theme={checkboxTheme}
              value={isChecked}
              onChange={() => handleSelect(node.id, nodeDisabled)}
            >
              {node.label}
            </Checkbox>
          </div>
          {hasChildren && isExpanded && (
            <div className="children">{node.children ? renderTree(node.children) : null}</div>
          )}
        </div>
      ) : null;
    });
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setOpen((prev) => !prev);
    }
  };

  return (
    <div
      className={`tree-select ${disabled ? 'disabled' : ''} ${error ? 'error' : ''} ${big ? 'big' : ''} ${dark ? 'dark' : ''} ${full ? 'full' : ''}`}
    >
      {label && <label className={required ? 'required' : ''}>{label}</label>}
      <div ref={inputRef} className="dropdown" onClick={toggleDropdown}>
        {' '}
        {/* Используем inputRef */}
        <input
          type="text"
          placeholder={placeholder}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          disabled={disabled}
          className="filter-input"
        />
        <Chevron className={`chevron ${open ? 'open' : ''}`} />
      </div>
      {open && (
        <div ref={treeRef} className={`tree-dropdown-list ${open ? 'open' : ''}`}>
          <div className="tree-list__item">{renderTree(data)}</div>
        </div>
      )}
    </div>
  );
};

export default TreeSelect;
