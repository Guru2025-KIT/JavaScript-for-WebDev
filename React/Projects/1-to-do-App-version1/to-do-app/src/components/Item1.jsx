export function PastToDo1() {
  let todoName = "Buy Milk";
  let todoDate = "4/10/2026";
  return (
    <div>
      <div>
        <div>
          <div class="container-input">
            <div class="row">
              <div class="col-4">{todoName}</div>
              <div class="col-4">{todoDate}</div>
              <div class="col-2">
                <button type="button" class="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PastToDo2() {
  let todoName = "Go to College";
  let todoDate = "4/10/2026";
  return (
    <div>
      <div>
        <div>
          <div class="container-input">
            <div class="row">
              <div class="col-4">{todoName}</div>
              <div class="col-4">{todoDate}</div>
              <div class="col-2">
                <button type="button" class="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}