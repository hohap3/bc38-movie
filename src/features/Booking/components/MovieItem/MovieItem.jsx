import { Button, Card } from "antd";

function MovieItem(props) {
  const { hinhAnh, tenPhim, moTa } = props.item;

  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img alt="example" className="col-span-1 w-full h-96" src={hinhAnh} />
        }
      >
        <h2 className="text-3xl">{tenPhim}</h2>
        <p className="my-4">{moTa}</p>
        <Button type="primary">Booking</Button>
      </Card>
    </div>
  );
}

export default MovieItem;
