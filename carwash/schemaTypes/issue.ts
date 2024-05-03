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
		  },
		  {
			title: 'Checked',
			name: 'checked',
			type: 'boolean',
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
		  },
		  {
			title: 'Checked',
			name: 'checked',
			type: 'boolean',
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
		  },
		  {
			title: 'Checked',
			name: 'checked',
			type: 'boolean',
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
		  },
		  {
			title: 'Checked',
			name: 'checked',
			type: 'boolean',
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
		  },
		  {
			title: 'Checked',
			name: 'checked',
			type: 'boolean',
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
		  },
		  {
			title: 'Checked',
			name: 'checked',
			type: 'boolean',
		  }	
		]	
	}
  ],
});