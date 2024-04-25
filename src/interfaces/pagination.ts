export interface PaginationProps {
   phonePerPage: number;
   totalPhones: number;
   currentPage: number;
   paginate: (pageNumber: number) => void;
 }