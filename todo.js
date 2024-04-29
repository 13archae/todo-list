function Todo({ todo, index, remove }) {
  function handle() {
    console.log("Ping:", index);
    remove(index);
  }
  return (
    <div className="todo" onClick={handle}>
      <i class="fa-solid fa-check list-icon-color" />
      &nbsp;{todo.text}
    </div>
  );
}
