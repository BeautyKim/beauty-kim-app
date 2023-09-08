export default function formattedDate(data: any) {
    const createdTime = new Date(data.created_time);
    const year = createdTime.getFullYear();
    const month = createdTime.getMonth() + 1;
    const day = createdTime.getDate();
    const formattedDate = `${year}년 ${month}월 ${day}일`;

    return formattedDate;
}