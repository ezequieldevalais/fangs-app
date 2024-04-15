// material-ui
import { Scheduler } from "@aldabil/react-scheduler";

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <MainCard title="Appointments">
    <Scheduler
            view="day"
            day={{
              step: 15,
              startHour: 8,
              endHour: 21,
            }}
            events={[
                {
                event_id: 1,
                title: "Event 1",
                start: new Date("2021/5/2 09:30"),
                end: new Date("2021/5/2 10:30"),
                },
                {
                event_id: 2,
                title: "Event 2",
                start: new Date("2021/5/4 10:00"),
                end: new Date("2021/5/4 11:00"),
                },
            ]}
            />
  </MainCard>
);

export default SamplePage;
