import {mout, shallow, render} from 'enzyme';
import {ResultList, ResultGroup} from '../results';

describe ('Results Search components', () => {
    describe('<ResultList/>', () => {
        it('should be a div with data-focus="result-list"', () => {
            const wrapper = shallow(<ResultList />);
            expect(wrapper.find("[data-focus='result-list']")).to.have.length(1);
        });
        //TODO EPHRAME : activate this test
        it.skip('allows us to set props isSelectable ', () => {
            const wrapper = shallow(<ResultList />)
            expect(wrapper.find("[data-focus='list-advanced-search']")).to.have.length(1);
            wrapper.setProps({isSelectable: true})
            expect(wrapper.find("[data-focus='selectable-list-advanced-search']")).to.have.length(1);

        });
        it('should have three line in the list', () => {
            const LineComponent = props => <div>Line de Test</div>;
            const toolbarProps = {
                groupList: ['group1', 'group2', 'group3'],
                sortList: ['sort1', 'sort2', 'sort3']
            }
            const wrapper = render(<ResultList toolbarProps={toolbarProps} LineComponent={LineComponent} data={[{linedata: 1}, {linedata: 2}, {linedata: 3}]} />);
            expect(wrapper.find("[data-focus='line-advanced-search']")).to.have.length(3);

        });
        describe("when it's a list with no listWrapper in the props", () => {
            it('should have a ul with a className="mdl-list"', () => {
                const toolbarProps = {
                    groupList: ['group1', 'group2', 'group3'],
                    sortList: ['sort1', 'sort2', 'sort3']
                }
                const wrapper = render(<ResultList  toolbarProps={toolbarProps} isSelectable={false}/>)
                expect(wrapper.find("ul.mdl-list")).to.have.length(1);

            });
        });
    });
});
