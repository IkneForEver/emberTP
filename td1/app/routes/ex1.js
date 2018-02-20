import Route from '@ember/routing/route';
import EmberObject, {computed} from '@ember/object'

const Note = EmberObject.extend({
	size: computed('content', function() {
		return this.get('MAX') - this.get('content').length
	}),
	style: computed('size', function() {
		return `alert alert-${this.get('size')>50?'success':this.get('size')<20?'danger':'warning'}`
	}),
	alertVisible: computed.notEmpty('info'),
	info: '',
	MAX: 100,
	content: 'Default content'
})

export default Route.extend({
	model() {
		return Note.create({
			MAX: 100,
			content: "Entrez votre texte: ",
		})
	},
	actions: {
		save: function(model) {
			let content = model.get('content')
			model.set('info', `Note saved: ${content}`)
		},
		clear: function(model) {
			model.set('content', '')
			model.set('info', '')
		},
	}
})
