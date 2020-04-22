import { forIn, map } from "lodash";
import objectLength from "../../../../helpers/objectLength";
import { setContentIndex } from "../../../../redux/actions/statisticsActions";
import { clearSearchedContent, setInputValue } from "../../../../redux/actions/searchActions";
import { connect } from "react-redux";

const TagsTitle = ({ statistics, setContentIndex, contentIndex, clearSearchedContent, setSearchInputValue }) => {
    let titles = [];
    let totalLength = 0;

    forIn(statistics, (tags, category) => {
        totalLength += objectLength(tags);
        titles.push(category)
    });

    const changeContentIndex = (index) => () => {
        setContentIndex(index);
        setSearchInputValue('');
        clearSearchedContent()
    };

    return statistics ?
        <div className='sub-content-titles'>
            <div className='sub-content-titles-wrapper'>
                <span
                    className={contentIndex === 0 ? 'sub-content-titles-active' : ''}
                    onClick={changeContentIndex(0)}
                >
                All
                </span>
                <div className='total-number-of-block'>
                    { totalLength }
                </div>
            </div>

            {map(titles, (title, index) =>  (
                <div className='sub-content-titles-wrapper' key={index}>
                    <span
                        className={contentIndex === index + 1 ? 'sub-content-titles-active' : ''}
                        onClick={changeContentIndex(index + 1)}
                    >
                        { title }
                    </span>
                </div>
            ))}
        </div>
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
