//
//  tablecell.swift
//  Login UI
//
//  Created by Rohan on 09/11/18.
//  Copyright © 2018 Infogain. All rights reserved.
//

import UIKit

class tablecell: UITableViewCell {


    @IBOutlet weak var text1: UILabel!
    
    @IBOutlet weak var text2: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
