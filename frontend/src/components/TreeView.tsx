import { Button } from '@mui/material';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

const data = [
    { id: 3, title: "North America", parent_id: 0 },
    { id: 5, title: "United States", parent_id: 3 },
    { id: 17, title: "Costa Rica", parent_id: 3 },
    { id: 26, title: "Canada", parent_id: 3 },
    { id: 4, title: "South Carolina", parent_id: 5 },
    { id: 10, title: "Florida", parent_id: 5 },
    { id: 21, title: "La Fortuna", parent_id: 17 },
    { id: 27, title: "British Columbia", parent_id: 26 },
    { id: 25, title: "Devil's Den", parent_id: 10 }
];

interface DBTreeItem {
    id: number;
    title: string;
    parent_id: number;
  }
  interface TreeViewItem {
    id: string;
    label: string;
    children: TreeViewItem[];
  }


// Function to build the tree
const buildTree = (items: DBTreeItem[], parentId = 0): TreeViewItem[] => {
    return items
        .filter((item: DBTreeItem) => item.parent_id === parentId)
        .map((item: DBTreeItem) => ({
            id: item.id.toString(),
            label: item.title,
            children: buildTree(items, item.id),
        }));
};

// Convert the data into a tree
const treeData = buildTree(data);

// Output the tree
console.log(JSON.stringify(treeData, null, 2));

const renderLabelWithButton = (label: string, nodeId: string) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
      <span>{label}</span>
      <Button
        variant="contained"
        size="small"
        onClick={(e) => {
          e.stopPropagation(); // Prevents tree node toggle on button click
          console.log(`Button clicked on node ${nodeId}`);
        }}
      >
        -&gt;
      </Button>
    </div>
  );

const renderTree = (nodes: TreeViewItem) => (
    <TreeItem itemId={`${nodes.id}`} label={(renderLabelWithButton(nodes.label, `${nodes.id}`))}>

        {Array.isArray(nodes.children)
            ? nodes.children.map((child: TreeViewItem) => renderTree(child))
            : null}
    </TreeItem>
);

const MyTreeView = () => {
    return (
        <div style={{ width: '100%', backgroundColor: 'grey' }}>
            <SimpleTreeView>
                {treeData.map((tree: TreeViewItem) => renderTree(tree))}
            </SimpleTreeView>
        </div>
    );
};

export default MyTreeView;
