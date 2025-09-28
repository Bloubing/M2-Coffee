export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center p-10">Paramètres</h1>

      <div className="flex flex-col ">
        <div className=" flex justify-between border-y-1 p-4 border-black/10">
          <p>Notifications</p>

          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="relative w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-yellow-950 "></div>
            <span class="ms-s" />
          </label>
        </div>
        <div className="border-b-1 p-4 flex justify-between border-black/10">
          <p>Langue</p>
          <div className="flex space-x-1.5 text-gray-500">
            <p>Français </p>
            <p>&gt;</p>
          </div>
        </div>
      </div>
      <div className="flex mt-10">
        <a className="mx-auto py-3 px-5 bg-red-700 text-white rounded-xl">
          Réinitialiser mes données
        </a>
      </div>
    </div>
  );
}
