declare module 'react-visjs-timeline' {
    import { Component, RefObject } from 'react';

    interface TimelineComponentProps {
        options?: {
            start: string;
            end: string;
            editable?: boolean;
            onMove?: (props: any) => void;
            onRemove?: (props: any) => void;
        };
        items: Array<{
            id: number;
            content: string;
            start: string | null;
            type: string;
        }>;
    }

    export default class Timeline extends Component<TimelineComponentProps> {
        timeline: {
            setWindow: (start: string, end: string, options?: { animation: boolean }) => void;
            redraw: () => void;
            dom: {
                container: HTMLElement;
            };
        };
    }
}
