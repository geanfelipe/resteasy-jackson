$(document).ready(function(){
	$('.ui.form')
	  .form({
	    first_name: {
	      identifier  : 'firstname',
	      rules: [
	        {
	          type   : 'length[4]',
	          prompt : 'Your First Name must be at least 6 characters '
	        }
	      ]
	    },
	    last_name: {
		      identifier  : 'lastname',
		      rules: [
		        {
		          type   : 'length[4]',
		          prompt : 'Your Last Name must be at least 6 characters '
		        }
		      ]
		    },
	    gender: {
	      identifier  : 'gender',
	      rules: [
	        {
	          type   : 'empty',
	          prompt : 'Please select a gender'
	        }
	      ]
	    },
	    username: {
	      identifier : 'username',
	      rules: [
	        {
	          type   : 'empty',
	          prompt : 'Please enter a username'
	        }
	      ]
	    },
	    password: {
	      identifier : 'password',
	      rules: [
	        {
	          type   : 'empty',
	          prompt : 'Please enter a password'
	        },
	        {
	          type   : 'length[6]',
	          prompt : 'Your password must be at least 6 characters'
	        }
	      ]
	    },
	    passwordConfirm: {
	        identifier: 'password-confirm',
	        rules: [{
	          type: 'match[password]',
	          prompt: 'Password don\'t match'
	        }]
	    }
	  });
});