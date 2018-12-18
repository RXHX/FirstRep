//
//  Slideoutbutton.swift
//  Login
//
//  Created by Rohan on 29/10/18.
//  Copyright © 2018 Infogain. All rights reserved.
//

import UIKit
import Alamofire
import SwiftyJSON

class Slideoutbutton: UITableViewController{

  
    @IBOutlet weak var table: UITableView!
    
    @IBOutlet weak var slider: UIBarButtonItem!
   
 
    
    var Title = [String]()
     var imageurl = [String]()
    var Description : [String] = []
    override func viewDidLoad() {
        super.viewDidLoad()
       getdata()
      
        save()
    }

   
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
 
    

    func save()
    {
        
        if revealViewController() != nil
        {
            slider.target = revealViewController()
            slider.action = #selector(SWRevealViewController.revealToggle(_:))
            revealViewController().rearViewRevealWidth = 275
            view.addGestureRecognizer(self.revealViewController().panGestureRecognizer())
            
            
        }
    }
    func getdata()
    {
        
        print("Working now better")
        Alamofire.request("https://newsapi.org/v2/top-headlines?country=us&apiKey=a3970d6fd48945c4af1a7c1e06865657").responseJSON(completionHandler:{
            (response) in
            print(response)
            print("****")
            print(response.result)
            print("workinh here upto")
       
            if let jsonValue = response.result.value {
                let json = JSON(jsonValue)
                if let quote = json["status"].string{
                    print(quote)
                    print()
                    print("************")
                }
                if let quote = json["totalResults"].int{
                    print(quote)
                    print()
                    print("************")
                }
                for i in 0...28
                {
                    print("Value of i \(i)")
                    if let quote = json["articles"][i]["author"].string{
                    print(quote)
                    print()
                    print("************")
                }
                if let quote = json["articles"][i]["content"].string{
                    print(quote)
                    print()
                    print("************")
                }
                
                if let quote = json["articles"][i]["description"].string{
                    self.Description.append(quote)
                    print(quote)
                    print()
                    print("************")
                }
                
                if let quote = json["articles"][i]["publishedAt"].string{
                    print(quote)
                    print()
                    print("************")
                }
                
                if let quote = json["articles"][i]["source"]["id"].string{
                    print(quote)
                    print()
                    print("************")
                }
                if let quote = json["articles"][i]["source"]["name"].string{
                    print(quote)
                    print()
                    print("************")
                }
                if let quote = json["articles"][i]["title"].string{
                    print(quote)
                    self.Title.append(quote)
                    print()
                    print("************")
                }
                
                if let quote = json["articles"][i]["url"].string{
                    print(quote)
                    print()
                    print("************")
                }
                if let quote = json["articles"][i]["urlToImage"].string{
                    self.imageurl.append(quote)
                    print(quote)
                    print()
                    print("************")
                }
                    
                    
                    
                    
                }
            }
            
})
        
    
}
    
    // MARK: - Table view data source
    
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 28
    }
    
    // create a cell for each table view row
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        let cell = table.dequeueReusableCell(withIdentifier: "cell", for: indexPath) as! tablecell
//        for i in 0...28
//        {
//          cell.text1.text = Title[i]
//         cell.text2.text = Description[i]
//            print(i)
//        }
                return cell;
    }
    

}

        
        

        
        
        

    
    


