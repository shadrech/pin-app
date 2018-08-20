export const statusColor = props => {
    if (props.verified) return "#65E53B";
    if (props.locked) return "#E51B1B";
    if (props.neutral) return "#D8D8D8";
    return "#FD7762";
}