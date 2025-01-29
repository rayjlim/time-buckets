export interface GoalType  {
    id: number;
    title: string;
    type: number;
    parent_id: number;
    completed_at: string;
    children_count: number;
    priority: number;
    reason: string;
    tags: string;
    note: string;
    added_at: string;
    gps_coords: string;
    gps_zoom: number;
    parent: {
        id: number;
        title: string;
    }
}

export interface PageDataType {
    primary: GoalType[];
    children: GoalType[];
    pageMeta: {
        last_page: number;
        current_page: number;
        total: number;
        itemsPerPage: number;
    }
}
