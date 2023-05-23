import { ItemsList } from "./components/ItemsList";

export function App() {
  return (
    <>
      <main
        className="flex 
        flex-col 
        items-center 
        justify-center"
      >
        <article
          className="flex flex-col 
          items-center justify-center 
          border 
          border-green-600 
          rounded-xl 
          mt-1.5 
          w-2/5 
          p-1 
          gap-2.5 
          h-auto"
        >
          <h1 className="w-full text-center text-3xl">Lista de compras</h1>
          <ItemsList />
        </article>
      </main>
    </>
  );
}
