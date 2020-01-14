const daysConverter = (days: Number) => {
    if (days < 30) return days + ' jours';
    else return (days / 30) + ' mois';
}


export { daysConverter };