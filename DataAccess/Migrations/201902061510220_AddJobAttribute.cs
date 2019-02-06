namespace DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddJobAttribute : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Employee", "Job", c => c.String(maxLength: 15));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Employee", "Job");
        }
    }
}
