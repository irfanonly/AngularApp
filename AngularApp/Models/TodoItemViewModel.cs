﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AngularApp.Models
{
    public class TodoItemViewModel
    {
        [Required(ErrorMessage = "The Task Field is Required.")]
        public string task { get; set; }
        public bool completed { get; set; }
    }

    public class PostViewModel
    {
        [Required(ErrorMessage = "The Task Field is Required.")]
        public string post { get; set; }
    }
}