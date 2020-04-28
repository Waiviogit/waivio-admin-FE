import { forIn, map } from "lodash";
import { setContentIndex } from "../../../../redux/actions/statisticsActions";
import { clearSearchedContent, setInputValue } from "../../../../redux/actions/searchActions";
import { connect } from "react-redux";

const TagsTitle = ({ statistics, setContentIndex, contentIndex, clearSearchedContent, setSearchInputValue }) => {
    let titles = [];

    forIn(statistics, (tags, category) => {
        titles.push(category)
    });

    const changeContentIndex = (index) => () => {
        setContentIndex(index);
        setSearchInputValue('');
        clearSearchedContent()
    };

    return statistics ?
        <>
            <div className='sub-content-titles'>
                {map(titles, (title, index) =>  (
                    <div className='sub-content-titles-wrapper' key={index}>
                        <span
                            className={ contentIndex === index + 1 ? 'sub-content-titles-active' : ''}
                            onClick={changeContentIndex(index + 1)}
                        >
                            { title }
                        </span>
                    </div>
                ))}
            </div>

        </>
        :
        <span>Statistics</span>
};

const mapStateProps = state => ({
    contentIndex: state.ui.tags.contentIndex
});

const mapDispatchToProps = dispatch => ({
    setContentIndex: (payload) => dispatch(setContentIndex(payload)),
    clearSearchedContent: () => dispatch(clearSearchedContent()),
    setSearchInputValue: (payload) => dispatch(setInputValue(payload))
});

export default connect(mapStateProps, mapDispatchToProps)(TagsTitle);
