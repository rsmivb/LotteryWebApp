import LotteryTable, { ITableItem } from '../../components/lottery-table/LotteryTable';
import './Content.scoped.scss';

const lotteryItems: ITableItem[] = [{
  value: 1,
  quantity: 1,
},
{
  value: 2,
  quantity: 2,
},
{
  value: 3,
  quantity: 1,
},
{
  value: 4,
  quantity: 3,
},
{
  value: 5,
  quantity: 2,
},
{
  value: 6,
  quantity: 4,
}]

const Content: React.FC = () => {
  // const list = useAppSelector(store => store.loadList.lottery);
  //const dispatch = useDispatch();

  //useEffect(() => {
  //  dispatch(loadList());
  //});

  return <>
    <div className="lottery-content">
      <LotteryTable
        lotteryName={"MegaSena"}
        columnByRow={1}
        isDisabled={false}
        items={lotteryItems}
      />
    </div>
  </>;
}

export default Content;