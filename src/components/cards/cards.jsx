import './cards.css';

const Cards = () => {
  return (
    // <div class="row justify-content-md-center">
    //   <div class="col-md-3 offset-md-1">Один из трех столбцов столбцов </div>
    //   <div class="col-md-3">Один из трех столбцов столбцов</div>
    //   <div class="col-md-3 offset-md-1">Один из трех столбцов столбцов</div>
    // </div>
    // <div class="row justify-content-md-center">
    //   <div class="col-md-3 offset-md-1">Один из трех столбцов столбцов</div>
    //   <div class="col-md-3 offset-md-1">Один из трех столбцов столбцов</div>
    //   <div class="col-md-3 offset-md-1">Один из трех столбцов столбцов</div>
    // </div>
    <div class="row justify-content-md-evenly">
      <div class="col-md-3">Один из трех столбцов столбцов</div>
      <div class="col-md-3">Один из трех столбцов столбцов</div>
      <div class="col-md-3">Один из трех столбцов столбцов</div>
    </div>
  );
};

export default Cards;
