import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TreeView from './TreeView';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TreeDrawer() {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            role="presentation"
            onClick={toggleDrawer(anchor, true)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <TreeView />
        </Box>
    );

    return (
        <div>
            <>
                <Button onClick={toggleDrawer('left', true)}>Tree View</Button>
                <Button onClick={toggleDrawer('left', false)} id="tree-box-btn" style={{display: 'none'}}>Tree View Close</Button>

                <Drawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                >
                    {list('left')}
                </Drawer>
            </>
        </div>
    );
}
