import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './pagination.css'
const Paginations = (props) => {
  return (
      <div >
    <Pagination size="lg" aria-label="Page navigation Paginations" className='page '>
     
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
     
      
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      
    </Pagination>
    </div>
  );
}

export default Paginations;