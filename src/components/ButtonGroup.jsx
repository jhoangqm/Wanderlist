import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  return (
    <section className="button-group">
      <Button buttonType={"secondary"} onClick={markAllAsComplete}>
        Mark all as complete
      </Button>
      <Button buttonType={"secondary"} onClick={markAllAsIncomplete}>
        Mark all as incomplete
      </Button>
      <Button buttonType={"secondary"} onClick={resetToInitial}>
        Reset to initial
      </Button>
      <Button buttonType={"secondary"} onClick={removeAllItems}>
        Remove all items
      </Button>
    </section>
  );
}

// import Button from "./Button";

// export default function ButtonGroup({
//   handleMarkAllAsComplete,
//   handleMarkAllAsIncomplete,
//   handleResetToInitial,
//   handleRemoveAllItems,
// }) {
//   const secondaryButtons = [
//     { text: "Mark all as complete", onClick: handleMarkAllAsComplete },
//     { text: "Mark all as incomplete", onClick: handleMarkAllAsIncomplete },
//     { text: "Reset to initial", onClick: handleResetToInitial },
//     { text: "Remove all items", onClick: handleRemoveAllItems },
//   ];

//   return (
//     <section className="button-group">
//       {secondaryButtons.map((button) => (
//         <Button
//           key={button.text + button.onClick.toString()}
//           buttonType={"secondary"}
//           onClick={button.onClick}
//         >
//           {button.text}
//         </Button>
//       ))}
//     </section>
//   );
// }
