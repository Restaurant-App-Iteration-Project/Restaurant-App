import React from 'react';
import Restaurant from './Restaurant';

const List = (props) => {

  props.type.forEach((rest) => {

    return (
      <div>
        <Restaurant imgUrl={rest.imgUrl} name={rest.name} waitUrl={rest.waitUrl} />
      </div>
    );
  });

};

export default List;