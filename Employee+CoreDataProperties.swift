//
//  Employee+CoreDataProperties.swift
//  Login UI
//
//  Created by Rohan on 26/10/18.
//  Copyright © 2018 Infogain. All rights reserved.
//
//

import Foundation
import CoreData


extension Employee {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<Employee> {
        return NSFetchRequest<Employee>(entityName: "Employee")
    }

    @NSManaged public var firstname: String?
    @NSManaged public var password: String?
    @NSManaged public var emailid: String?
    @NSManaged public var lastname: String?
    @NSManaged public var confirmpassword: String?

}
