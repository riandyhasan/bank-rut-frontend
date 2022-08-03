export interface Request {
    user_id: number;
    nominal: number;
    jenis: number;
    status: number;
    request_id: number;
}

export interface CreateRequest {
    user_id: number;
    nominal: number;
    jenis: number;
    status: number;
}