import Enzyme from 'enzyme'
import Adaper from 'enzyme-adapter-react-16'

Enzyme.configure({
    adapter: new Adaper()
})