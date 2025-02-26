import PushNotification from 'react-native-push-notification';
import type {Task} from '../screens/CreatedTaskScreen.tsx';

export const scheduleTaskNotification = (task: Task) => {
    if (task.deadline) {
        const deadlineDate = new Date(task.deadline);
        const currentDate = new Date;
        if (deadlineDate > currentDate) {
            const notificationsDate = new Date(deadlineDate.getTime() - 60 * 60 * 1000);
            PushNotification.localNotificationSchedule({
                message: 'Upcomming Task: ${task.title}',
                date: notificationsDate,
            });
        }
    }
};
