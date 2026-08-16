export default function AddToDo() {
  return (
    <div>
      <div class="container-input">
        <div class="row">
          <div class="col-4">
            <input type="text" className="todo" placeholder="Enter To Do" />
            <br />
          </div>
          <div class="col-4">
            <input type="date" className="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

