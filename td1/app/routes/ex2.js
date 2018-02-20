import Ember from 'ember'
import Route from '@ember/routing/route'
import EmberObject, {computed} from '@ember/object'

const Services = EmberObject.extend({
	service: [],
	sumActive: computed('service.@each.active', function() {
		let services = this.get('service').filterBy('active', true)

		return services.reduce((total, service) => total + service.price, 0)
	}),
	countActive: computed('service.@each.active', function() {
		let services = this.get('service').filterBy('active', true)

		return services.length
	})

})

export default Route.extend({
	model() {
		return Services.create({
			service: [
				{
					"name": "Web Development",
					"price": 300,
					"active":true
				},{
					"name": "Design",
					"price": 400,
					"active":false
				},{
					"name": "Integration",
					"price": 250,
					"active":false
				},{
					"name": "Formation",
					"price": 220,
					"active":false
				}
			]
		})
	},
	actions: {
		toggleActive(s) {
			Ember.set(s, 'active', !Ember.get(s, 'active'))
		}
	}
});
