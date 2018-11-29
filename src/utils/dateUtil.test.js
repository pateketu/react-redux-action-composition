import * as sut from './dateUtil';
describe('Date Utils', ()=>{
    it('returns null if date is invalid', ()=>{
        const result = sut.formatDate('fubar');
        expect(result).toBeNull();
    });
    it('formats date in human readable format', ()=>{
        const result = sut.formatDate('2017-02-09T04:27:38Z');
       expect(result).toEqual('9/2/2017 4:27:38');
    })

});