function FunctionComponent() {
    const listItems = [1,2,4,5,6].map((number) => <li key={number}>{number}</li>);
    return ( 
    <div>
        <ul>
            {listItems}
        </ul>
    </div> 
    );
}

export default FunctionComponent;