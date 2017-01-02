import { toggleSettingsUi } from '../actions/index.js'
import settings from '../reducers/settings'

test('default settings state', () => {
	expect(settings(undefined, {type: undefined})).toEqual({hiddenUi: true})
})

test('toggleSettingsUi flips hiddenUi', () => {
	expect(settings({hiddenUi: true}, toggleSettingsUi())).toEqual({hiddenUi: false})
	expect(settings({hiddenUi: false}, toggleSettingsUi())).toEqual({hiddenUi: true})
})
