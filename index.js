setInterval(() => {
    date=new Date();
    hTime=date.getHours();
    mTime=date.getMinutes();
    sTime=date.getSeconds();

    hRotation=30*hTime+.5*mTime;
    mRotation=6*mTime;
    sRotation=6*sTime;

    hour.style.transform=`rotate(${hRotation}deg)`;
    minute.style.transform=`rotate(${mRotation}deg)`;
    second.style.transform=`rotate(${sRotation}deg)`;
    

}, 1000);