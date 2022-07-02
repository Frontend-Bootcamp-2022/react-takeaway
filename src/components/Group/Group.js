import GroupItemAssistant from "./GroupItemAssistant"
import GroupItem from "./GroupItem";
const Group = (props) => {

  const members = props.members.map(member => member.assistant ?
    <GroupItemAssistant name={member.name} /> :
    <GroupItem name={member.name} />)

  return (
    <div>
      <h2>{props.groupName}</h2>
      {members}
    </div>
  )
}

export default Group;