function Card(props) {
  return (
    <div className="flex w-full justify-center py-5">
      <div className=" text-primary bg-cardBG h-min w-6/12 block rounded-3xl p-4 shadow-sm shadow-neutral-500">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
