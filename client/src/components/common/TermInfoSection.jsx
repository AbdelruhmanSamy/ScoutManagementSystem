import "../../assets/styles/components/TermInfoSection.scss";
import {
  useGetCurTermQuery,
  useGetCurWeekQuery,
  useGetRemainingWeeksQuery,
} from "../../redux/slices/termApiSlice";
import Button from "./Button";
import InfoBox from "./InfoBox";

export default function TermInfoSection() {
  const { data: termInfo, isFetching: isFetchingTerm } = useGetCurTermQuery();
  const { data: curWeek, isFetching: isFetchingWeek } = useGetCurWeekQuery();
  const { data: weeksLeft, isFetching: isFetchingWeeksLeft } =
    useGetRemainingWeeksQuery();

  if (
    termInfo &&
    !isFetchingTerm &&
    curWeek &&
    !isFetchingWeek &&
    weeksLeft &&
    !isFetchingWeeksLeft
  )
    console.log({ termInfo, curWeek, weeksLeft });

  return (
    <div
      className="term-info-section"
      style={{
        marginBlock: "1rem",
      }}
    >
      <div className="info-section">
        <InfoBox
          spans={true}
          color="colorful"
          title="اسم الفترة"
          value={
            isFetchingTerm
              ? "جاري التحميل"
              : !termInfo
              ? "لا يوجد بيانات"
              : termInfo?.body?.termName
          }
        />
        <InfoBox
          color="dark"
          title="الاسبوع الحالي"
          value={
            isFetchingWeek
              ? "جاري التحميل"
              : !curWeek
              ? "0"
              : curWeek?.body?.weekNumber
          }
        />
        <InfoBox
          color="dark"
          title="الاسابيع الباقية"
          value={
            isFetchingWeeksLeft
              ? "جاري التحميل"
              : !weeksLeft
              ? "0"
              : weeksLeft?.body
          }
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginBlock: "1rem",
        }}
        className="row"
      >
        <Button disabled className="Button--danger">
          إلغاء الاسبوع
        </Button>
        <Button linkTo="/edit-term" className="Button--dark">
          تعديل الفترة
        </Button>
      </div>
    </div>
  );
}
