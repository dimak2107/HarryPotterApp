export default interface Book {
    id: string;
    type: "book";
    attributes: {
        slug: string;
        title: string;
        summary?: string | null;
        author?: string | null;
        release_date?: string | null;
        dedication?: string | null;
        pages?: number | null;
        order?: number | null;
        cover?: string | null;
        wiki?: string | null;
    };
    relationships?: {
        chapters?: {
            data?: { id: string; type: "book" };
        };
    };
    links?: {
        self?: string;
    };
}