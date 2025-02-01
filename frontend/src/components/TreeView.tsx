import { Button } from '@mui/material';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

import useTreeView from '../hooks/useTreeView';
type Anchor = 'top' | 'left' | 'bottom' | 'right';
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

let toggleDrawerFunc = (anchor: Anchor, open: boolean) => { console.log(anchor, open); };
// Function to build the tree
const buildTreeJson = (items: DBTreeItem[], parentId = 0): TreeViewItem[] => {
    return items
        .filter((item: DBTreeItem) => item.parent_id === parentId)
        .map((item: DBTreeItem) => ({
            id: item.id.toString(),
            label: item.title,
            children: buildTreeJson(items, item.id),
        }));
};

const handleNodeClick = (e: React.MouseEvent<HTMLButtonElement>, nodeId: string) => {
    e.stopPropagation(); // Prevents tree node toggle on button click
    console.log(`Button clicked on node ${nodeId} t`);
    const input = document.getElementById('searchFormParentId') as HTMLInputElement;
    if (input) {
        input.value = nodeId;
    }
    const form = document.getElementById('searchForm') as HTMLFormElement;
    console.log(`form`, form);
    if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
        form.submit();
        toggleDrawerFunc('top', false);
    }
}

const renderLabelWithButton = (label: string, nodeId: string) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <span>{label}</span>
        <Button
            variant="contained"
            size="small"
            onClick={e => handleNodeClick(e, nodeId)}
        >
            -&gt;
        </Button>
    </div>
);

const renderTree = (nodes: TreeViewItem) => (
    <TreeItem key={`${nodes.id}`} itemId={`${nodes.id}`} label={(renderLabelWithButton(nodes.label, `${nodes.id}`))}>
        {Array.isArray(nodes.children)
            ? nodes.children.map((child: TreeViewItem) => renderTree(child))
            : null}
    </TreeItem>
);

type MyTreeViewProps = {
    toggleDrawer: (anchor: Anchor, open: boolean) => void;
};

const MyTreeView: React.FC<MyTreeViewProps> = ({ toggleDrawer }) => {
    toggleDrawerFunc = toggleDrawer;
    const { treeView, isLoading, rootId, setRootId } = useTreeView();
    // console.log('treeView :', treeView);
    const treeData = buildTreeJson(treeView, rootId);
    // console.log('treeData :', treeData);
    return (
        <>
            <div style={{ width: '100%', backgroundColor: 'grey' }}>

                <SimpleTreeView>
                    {treeData.map((tree: TreeViewItem) => renderTree(tree))}
                </SimpleTreeView>
                {isLoading && (<div>Loading...</div>)}
                <input type="number" value={rootId} onChange={e => setRootId(Number(e.target.value))} />
                <hr />
            </div>
        </>
    );
};

export default MyTreeView;
