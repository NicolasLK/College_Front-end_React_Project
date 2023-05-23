import { Trash } from "phosphor-react";
import { useState } from "react";

interface ItensProps {
  id: number;
  name: string;
  isComplete: boolean;
}

export function ItemsList() {
  const [items, setItems] = useState<ItensProps[]>([]);
  const [newItemName, setNewItemName] = useState("");

  function handlecreateNewItem(event) {
    event.preventDefault();
    if (newItemName === "") {
      alert("Informe o nome do item!");
    } else {
      const idRandom = (num: number) => Math.floor(Math.random() * num);

      const newItem = {
        id: idRandom(10),
        name: newItemName,
        isComplete: false,
      };

      if (items.map((item) => item.name).includes(newItem.name)) {
        alert("Item ja existente");
      } else {
        setItems([...items, newItem]);
      }
      setNewItemName("");
    }
  }

  function handleToggleItemSituation(id: number) {
    setItems(
      items.map((totalItems) => {
        if (totalItems.id === id) {
          return { ...totalItems, isComplete: !totalItems.isComplete };
        } else {
          return totalItems;
        }
      })
    );
  }

  function handleRemoveItem(id: number) {
    setItems(items.filter((itemName) => itemName.id !== id));
  }

  return (
    <>
      <section className="border border-stone-500 rounded-md p-3 w-4/5 h-96 overflow-y-scroll mt-1">
        <ul className="flex flex-col gap-1 p-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex gap-4 items-center justify-between border-b border-y-stone-500 mt-1 p-0.5"
            >
              <input
                type="checkbox"
                readOnly
                checked={item.isComplete}
                onClick={() => handleToggleItemSituation(item.id)}
              />
              <>
                {item.isComplete ? (
                  <>
                    <p className="text-xl capitalize line-through">
                      {item.name}
                    </p>
                  </>
                ) : (
                  <p className="text-xl capitalize">{item.name}</p>
                )}
              </>
              <button
                type="button"
                onClick={() => handleRemoveItem(item.id)}
                className="bg-red-500 p-1 rounded-lg hover:brightness-90"
              >
                <Trash size={16} color="#050505" weight="bold" />
              </button>
            </li>
          ))}
        </ul>
      </section>
      <form
        action="#"
        method="post"
        onSubmit={handlecreateNewItem}
        className="w-full flex mt-1  p-2 items-center gap-3"
      >
        <input
          type="text"
          placeholder="Digite o nome do item"
          className="flex-1 border-2 border-black p-2 rounded-xl text-base text-left"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-400 rounded-xl p-2 text-base hover:brightness-90"
        >
          Send Item
        </button>
      </form>
    </>
  );
}
