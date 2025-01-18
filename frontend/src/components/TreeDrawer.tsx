import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TreeView from './TreeView';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TreeDrawer() {
    const [state, setState] = React.useState({
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
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
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
                <Button onClick={toggleDrawer('top', true)}>Tree View</Button>
                <Drawer
                    anchor={'top'}
                    open={state['top']}
                    onClose={toggleDrawer('top', false)}
                >
                    {list('right')}
                </Drawer>
            </>
        </div>
    );
}
