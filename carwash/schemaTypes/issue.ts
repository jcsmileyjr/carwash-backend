import {defineField, defineType} from 'sanity'

export const issueType = defineType({
  name: 'issue',
  title: 'Issue',
  type: 'document',
  fields: [
    defineField({
      name: 'issueID',
      type: 'string',
    }),
	defineField({
		name: 'date',
		type: 'string',
	}),
	defineField({
		name: 'logType',
		type: 'string',
	}), 
	defineField({
		name: 'content',
		type: 'string' || 'null',
	}), 
	{
		type: 'object',
		name: 'pickTrash',
		fields: [
		  {
			title: 'Pick Trash',
			name: 'content',
			type: 'string',
			readOnly: true,
			initialValue: 'Pick up trash',
		  },
		  {
			title: 'Checked',
			name: 'checked',
			type: 'boolean',
			initialValue: false,
		  }
		]
	},
	{	
		type: 'object',
		name: 'cleanVacuum',
		fields: [
		  {
			title: 'Clean Vacuum',
			name: 'content',
			type: 'string',
			readOnly: true,
			initialValue: "Clean out bottom of vaccum",
		  },
		  {
			title: 'Checked',
			name: 'checked',
			type: 'boolean',
			initialValue: false,
		  }
		]	
	},
	{	
		type: 'object',
		name: 'dumpTrashCans',
		fields: [
		  {
			title: 'Dump Trash Cans',
			name: 'content',
			type: 'string',
			readOnly: true,
			initialValue: "Dump trash cans",
		  },
		  {
			title: 'Checked',
			name: 'checked',
			type: 'boolean',
			initialValue: false,
		  }
		]	
	},
	{	
		type: 'object',
		name: 'mowLawn',
		fields: [
		  {
			title: 'Mow Lawn',
			name: 'content',
			type: 'string',
			readOnly: true,
			initialValue: "Cut or weed the lawn",
		  },
		  {
			title: 'Checked',
			name: 'checked',
			type: 'boolean',
			initialValue: false,
		  }
		]	
	}, 
	{
		type: 'object',
		name: 'checkVacuumHoses',
		fields: [
		  {
			title: 'Check Vacuum Hoses',
			name: 'content',
			type: 'string',
			readOnly: true,
			initialValue: "Check vacuums hose’s heads for obstructions",
		  },
		  {
			title: 'Checked',
			name: 'checked',
			type: 'boolean',
			initialValue: false,
		  }
		]	
	},
	{
		type: 'object',
		name: 'checkBayEquipment',	
		fields: [
		  {
			title: 'Check Bay Equipment',
			name: 'content',
			type: 'string',
			readOnly: true,
			initialValue: "Check each bay wand or brush to ensure it works.",
		  },
		  {
			title: 'Checked',
			name: 'checked',
			type: 'boolean',
			initialValue: false,
		  }	
		]	
	}
  ],
});