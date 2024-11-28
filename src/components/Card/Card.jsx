
import './Card.scss'; 

const DynamicEventHandler = ({ tags, handleTagClicked, selectedTag }) => {
    return (
    <div className="filter-drawer__content">
        {tags.map((tag) => (
        <button
            onClick={() => handleTagClicked(tag)}
            key={tag}
            className={tag === selectedTag ? 'selected' : ''}  // Add 'selected' class if it's the active tag
        >
            {tag}
        </button>
        ))}
    </div>
    );
};

export default DynamicEventHandler; 











// const DynamicEventHandler = ({tags, handleTagClicked}) => {
//     return (
//         <>
//         {
//             tags.map((tag) =>{
//                 return (
//                     <button onClick={handleTagClicked}
//                     key={tag}>
//                         {tag}</button>
//                 )

//             })
//         }
//         </>
//     )
// }


// export default DynamicEventHandler; 

