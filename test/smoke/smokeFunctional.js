import sel from '../../data/selectors';


describe('Required fields and story created', function () {

    before("Open App", function () {
        browser.url("");
    });

    it('TC-26 Submit button is enabled after fields 1-4 are field in with valid values', function () {
        $(sel.name).setValue('LadyBug007');
        $$(sel.radioButton)[1].click();
        $(sel.age).setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(true);

    });

    it('TC-27 User is redirected to the story page', function () {
        browser.refresh();

        $(sel.name).setValue('LadyBug007');
        $$(sel.radioButton)[1].click();
        $(sel.age).setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        $(sel.submit).click();

        // browser.pause(2000);
        let tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });

});