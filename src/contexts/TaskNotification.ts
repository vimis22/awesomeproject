import PushNotification from 'react-native-push-notification';
import type { Task } from '../screens/CreatedTaskScreen';

export const scheduleTaskNotification = (task: Task) => {
    if (task.deadline) {
        const deadlineDate = new Date(task.deadline);
        const currentDate = new Date();

        if (deadlineDate > currentDate) {
            const notificationDate = new Date(deadlineDate.getTime());

            PushNotification.localNotificationSchedule({
                message: `Upcoming Task: ${task.title}`,
                date: notificationDate,
            });
        }
    }
};
