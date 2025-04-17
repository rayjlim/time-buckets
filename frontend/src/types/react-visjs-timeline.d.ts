interface TimelineProps {
    id: number;
    content: string;
    start: string;
    type: string;
    [key: string]: string | number;
}
declare module 'react-visjs-timeline' {
    import { Component } from 'react';

    interface TimelineComponentProps {
        options?: {
            start: string;
            end: string;
            editable?: boolean;
            onMove?: (props: TimelineProps) => void;
            onRemove?: (prop: TimelineProps) => void;
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
